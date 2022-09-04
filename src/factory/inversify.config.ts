import { Container } from 'inversify';
import { REPOSITORY_SYMBOLS } from '../repositoryTypes/repositorySymbols';
import {  SERVICE_SYMBOLS } from '../serviceTypes/serviceSymbols';
import { IVoteRepository } from '../repositoryTypes/IVoteRepository';
import { IVoteService } from '../serviceTypes/IVoteService';
import VoteRepository from '../repository/voteRepository';
import VoteService from '../services/VoteService';

const myContainer = new Container();
myContainer.bind<IVoteRepository>(REPOSITORY_SYMBOLS.IVoteRepository).to(VoteRepository);
myContainer.bind<IVoteService>(SERVICE_SYMBOLS.IVoteService).to(VoteService);

export default myContainer;
