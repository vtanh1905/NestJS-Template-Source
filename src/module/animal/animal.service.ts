import { Injectable } from '@nestjs/common';

@Injectable()
export class AnimalService {

    say(): string {
        return "Animal Service"
    }
}
