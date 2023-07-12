export interface EnvOptionInterface {
	title: string;
}

export interface EventDataInterface {
	task_number: string;
	flight_number: string;
	local_dep_date: string;
	event_type: string;
	status: string;
}

export interface authInterface{
	isLogin: boolean,
	loginAt: number | null,
	expireAt: number | null
}

export type AuthContextInterface = {
	isAuthenticated: authInterface | null;
	setIsAuthenticated: React.Dispatch<React.SetStateAction<authInterface | null>>;
	login: () => void;
	logout: () => void;
	authLoading:boolean
};

export interface FDSearch {
	flight_number?: FormDataEntryValue | null;
	departure?: FormDataEntryValue | null;
}
export interface DSearch {
	departure?: FormDataEntryValue | null;
}
export interface TDSearch {
	task_number?: FormDataEntryValue | null;
	departure?: FormDataEntryValue | null;
}
