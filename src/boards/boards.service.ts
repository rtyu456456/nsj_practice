import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';

@Injectable()
export class BoardsService {
    private boards: Board[] = [];
     
    getAllBoards(): Board[] {
        return this.boards;
    }
    
    createBoard(title: string, description: string){
        const board: Board = {
            title,
            description,
            status:BoardStatus.PUBLIC
        }
    }
}
