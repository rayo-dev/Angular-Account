import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AccountingService } from '../services/accounting.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [AccountingService],
})
export class AccountComponent implements OnInit {
  message: string;
  topupAccount: string;
  topupAmount: number;

  constructor(private readonly accountingService: AccountingService) {}

  ngOnInit() {}

  create(accountID: string) {
    if (accountID != null && accountID != '') {
      this.accountingService
        .createAccount(accountID)
        .then((res) => {
          this.message = 'Successfully added account';
        })
        .catch((err) => {
          this.message = err;
        });
    }
  }

  topup(event: any) {
    let accountID = this.topupAccount;
    let amount: number = this.topupAmount;
    if (accountID != null && accountID != '' && amount > 0) {
      this.accountingService
        .topUp(accountID, amount)
        .then((res) => {
          this.message = 'Current balance ' + res;
        })
        .catch((err) => {
          this.message = err;
        });
    }
  }
}
