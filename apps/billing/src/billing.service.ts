import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class BillingService {
  protected readonly logger = new Logger(BillingService.name);

  getHello(): string {
    return 'Hello World!';
  }

  bill(data: any){
    this.logger.log('Billing...', data)
  }
}
