import { TSvgFC } from 'containers/create-new-task/logic/models';

export interface ISelectValue {
	id: number;
	title: string;
	icon?: string;
	iconFC?: TSvgFC;
}

export interface ISelectProps {
	values: ISelectValue[];
	activeValue?: ISelectValue;
	onChange?: (value: ISelectValue) => void;
}