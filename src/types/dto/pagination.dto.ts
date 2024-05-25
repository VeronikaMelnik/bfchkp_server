import { ApiProperty } from "@nestjs/swagger";

export class PaginationDto {
  @ApiProperty({
    description: 'page number',
    default: '1',
    required: false,
  })
  page: number;

  @ApiProperty({
    description: 'items per page',
    default: '10',
    required: false,
  })
  perPage: number;

  @ApiProperty({
    description: '',
    required: false,
  })
  searchValue: string;
}
