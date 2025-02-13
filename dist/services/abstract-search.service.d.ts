import { FindOptionsWhere, Repository } from 'typeorm';
import { AbstractSearchDto } from '../dtos/abstract-search.dto';
import { SearchResultDto } from '../dtos/search-result.dto';
import { AbstractEntity } from '../entities/abstract.entity';
export declare abstract class AbstractSearchService<T extends AbstractEntity, S extends AbstractSearchDto<T>> {
    protected readonly repository: Repository<T>;
    protected constructor(repository: Repository<T>);
    protected abstract queryBuilder(model: S): FindOptionsWhere<T>;
    paginate(model: S): Promise<SearchResultDto<T>>;
}
