/**
 * @description       :
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             :
 * @last modified on  : 04-02-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
 **/
public with sharing class AccountController {

  //* Force Fellow
  @AuraEnabled(cacheable=true)
  public static List<Account> getAccounts(String searchText) {
    
    try {
      if (String.isEmpty(searchText)) {
        return [SELECT Id, Name FROM Account WITH USER_MODE LIMIT 100];
      } else {
        searchText = '%' + searchText + '%';
        return [
          SELECT Id, Name
          FROM Account
          WHERE Name LIKE :searchText
          WITH USER_MODE
          LIMIT 100
        ];
      }
    } catch (System.Exception allExp) {
      throw new AuraHandledException(allExp.getMessage());
    }
  }
  //* Force Fellow
  @AuraEnabled(cacheable=true)
  public static List<Contact> getAccountContacts(String accountId) {
    try {
      return [SELECT Id, Name FROM Contact WHERE AccountId =: accountId];
    } catch (System.Exception e) {
      throw new AuraHandledException(e.getMessage());
    }
  }
  //* Try version control
  public static void version() {
    Account myAcc =  [SELECT Id FROM Account LIMIT 1];
    System.debug('This is test ');
  }
  //* For LWC Map
  @AuraEnabled(cacheable = true)
  public static List<Account> lwcMap() {
    return [SELECT Id, Name, Description, BillingStreet, BillingCountry, BillingCity, BillingState, BillingPostalCode FROM Account
            ORDER BY Name LIMIT 20];
  }
  //*Get Parent Accounts
  @AuraEnabled(cacheable=true)
  public static List<Account> getParentAccount() {
    return [SELECT Id, Name, Industry FROM Account WHERE AnnualRevenue != null WITH USER_MODE];
  }

  @AuraEnabled(cacheable=true)
  public static List<Account> getAccountList() {
    return [
      SELECT Id, Name, Phone, Type, Rating, Industry
      FROM Account
      WHERE Rating = null
      WITH USER_MODE
      LIMIT 10
    ];
  }


  @AuraEnabled(cacheable=true)
  public static List<Account> selectAccountType(String newType) {
    return [
      SELECT Id, Name, Phone, Type, AnnualRevenue
      FROM Account
      WHERE Type =: newType
      WITH USER_MODE
      LIMIT 10];
  }

  @AuraEnabled(cacheable=true)
  public static List<Account> filterAccountType(String searchKey) {
    String key = '%' + searchKey + '%';
    return [
      SELECT Id, Name, Phone, Type
      FROM Account
      WHERE Name LIKE :key
      WITH USER_MODE
      LIMIT 10
    ];
  }

  @AuraEnabled(cacheable=true)
  public static Account getSingleAccount() {
    System.debug('Im in LWC');
    return [
      SELECT Id, Name, Phone, Type
      FROM Account
      WITH USER_MODE
      LIMIT 1
    ];
    
  }

  @AuraEnabled
  public static void randomizeAccountData(Id accountId) {
    try {
      Account acc = [
        SELECT Id, NumberOfEmployees
        FROM Account
        WHERE Id = :accountId
        WITH USER_MODE
        LIMIT 1
      ];
      acc.NumberOfEmployees = Integer.valueof((Math.random() * 100000));
      update as user acc;
    } catch (Exception e) {
      throw new AccountUpdateException(
        'Couldn\'t update account with ID ' + accountId
      );
    }
  }

  public class AccountUpdateException extends Exception {
  }
}