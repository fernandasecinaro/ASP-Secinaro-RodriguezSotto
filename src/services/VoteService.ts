import { injectable, inject } from 'inversify';
import 'reflect-metadata';
import { IVoteRepository } from '../repositoryTypes/IVoteRepository';
import { IVoteService } from '../serviceTypes/IVoteService';
import { REPOSITORY_SYMBOLS } from '../repositoryTypes/repositorySymbols';

@injectable()
class VoteService implements IVoteService {
  private _voteRepository: IVoteRepository;

  public constructor(@inject(REPOSITORY_SYMBOLS.IVoteRepository) voteRepository: IVoteRepository) {
    this._voteRepository = voteRepository;
  }

  public saveVote(): string {
    return this._voteRepository.saveVote();
  }
}

export default VoteService;
