"use strict";
// import { Injectable } from '@nestjs/common';
// import { FindOptionsWhere, Repository } from 'typeorm';
// import { InjectRepository } from '@nestjs/typeorm';
// import { AbstractEntity } from '../entities/abstract.entity';
// import { AbstractSearchDto } from '../dtos/abstract-search.dto';
// import { AbstractSearchService } from './abstract-search.service';
// type QueryBuilderFn<T, S> = (model: S) => FindOptionsWhere<T>;
// @Injectable()
// export class SearchService<
//   T extends AbstractEntity,
//   S extends AbstractSearchDto<T>,
// > extends AbstractSearchService<T, S> {
//   constructor(
//     @InjectRepository(AbstractEntity) repository: Repository<T>,
//     protected queryBuilderFn: QueryBuilderFn<T, S>,
//   ) {
//     super(repository, queryBuilderFn);
//   }
// }
