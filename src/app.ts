import express from 'express';
import { DonationRoutes } from './routes/donationRoutes';
import { DonationService } from './services/donationService';


class App {
    public app = express()
    public donationService = DonationService.getInstance(); 
    public donationRoutes = new DonationRoutes();

    constructor() {
        this.initializeMiddlewares();
        this.initializeRoutes();
      }
    
      private initializeMiddlewares(): void {
        this.app.use(express.json());
      }
    
      private initializeRoutes(): void {
        this.app.use('/', this.donationRoutes.router); 
      }
}

export default new App().app;