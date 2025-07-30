export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    city: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
}
