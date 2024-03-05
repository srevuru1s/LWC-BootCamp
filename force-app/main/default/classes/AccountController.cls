/**
 * @description       :
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             :
 * @last modified on  : 02-28-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
 **/
public with sharing class AccountController {
  //*Get Parent Accounts
  @AuraEnabled(cacheable=true)
  public static List<Account> getParentAccount() {
    return [SELECT Id, Name, Industry FROM Account WHERE AnnualRevenue != null WITH USER_MODE];
  }

  @AuraEnabled(cacheable=true)
  public static List<Account> getAccountList() {
    return [
      SELECT Id, Name, Phone, Type, Rating
      FROM Account
      WITH USER_MODE
      LIMIT 10
    ];
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
