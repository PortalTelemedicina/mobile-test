export interface Specialist {
  name: string;
  description: string;
  distance: string;
  actions: Actions;
}

export interface Actions {
  chat: string;
  call: string;
}