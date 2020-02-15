import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const path = context.getArgs()[0].route.path;
    const method = context.getArgs()[0].route.stack[0].method
    const statusCode = context.getArgs()[0].res.statusCode

    return next
      .handle()
      .pipe(
        tap(() => console.log(`${method.toUpperCase()} ${statusCode} ${path}  `)),
      );
  }
}

// Thêm màu sắc : https://www.npmjs.com/package/chalk