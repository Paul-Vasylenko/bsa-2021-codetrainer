import { EntityRepository, Repository } from 'typeorm';
import { Solution } from '../../models';
import { AbstractRepository } from '../abstract';

@EntityRepository(Solution)
export class SolutionRepository extends AbstractRepository<Solution> {
	getAll() {
		return this.createQueryBuilder('solution').getMany();
	}

	getByKey(value: string, key: string) {
		return this.createQueryBuilder('solution')
			.leftJoinAndSelect('solution.task', 'task')
			.leftJoinAndSelect('solution.user', 'user')
			.select(['solution', 'task.id', 'user.id'])
			.where(`solution.${key} = :value`, { value })
			.getOne();
	}

	updateById(id: string, data: Partial<Solution>) {
		return this.createQueryBuilder().update().set(data).where('id = :id', { id }).execute();
	}
}
