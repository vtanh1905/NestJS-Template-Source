import { applyDecorators, HttpCode, createParamDecorator } from '@nestjs/common';

// Nay dung` de dinh nghia trong param router
export const MyDecorator1 = createParamDecorator((data, req) => {
  console.log(data);
  console.log(req);
  return 123;
});


// Nay dung de dinh nghia @ tren ham` router
export function MyDecorator2(data) {
  // console.log(data);
  return applyDecorators(
    HttpCode(403)
  )
}
