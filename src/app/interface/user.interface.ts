export interface User {
  email: string,
  enabled: boolean,
  id: number,
  name: string,
  phone: string,
  supervisorId?: number,
  username: string

}


export const NULL_USER: User = {
  email: "",
  enabled: false,
  id: 0,
  name: "",
  phone: "",
  supervisorId: 0,
  username: ""
};
