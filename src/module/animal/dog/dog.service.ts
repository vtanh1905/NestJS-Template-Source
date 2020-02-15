import { Injectable } from '@nestjs/common';

@Injectable()
export class DogService {

    say(): string {
        return "Dog Service"
    }
}
