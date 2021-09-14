interface SpecialistInfoDTO {
  name: string;
  description: string;
  distance: number;
  actions: {
    call: string;
    chat: string;
  }
}

export default SpecialistInfoDTO;