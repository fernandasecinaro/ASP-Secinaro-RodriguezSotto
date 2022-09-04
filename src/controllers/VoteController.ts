import express from 'express';
import { Request, Response } from 'express';
import { injectable, inject } from 'inversify';
import 'reflect-metadata';
import { IVoteService } from '../serviceTypes/IVoteService';
import { SERVICE_SYMBOLS } from '../serviceTypes/serviceSymbols';

@injectable()
class VoteController {
  public path = '/votes';
  public voteRouter = express.Router();

  public constructor(@inject(SERVICE_SYMBOLS.IVoteService) private _voteService: IVoteService) {
    this.initializeRoutes();
  }

  public initializeRoutes() {
    this.voteRouter.post(this.path, this.vote);
  }

  public vote = async (req: Request, res: Response) => {
    res.send(this._voteService.saveVote());
  };
}

export default VoteController;
