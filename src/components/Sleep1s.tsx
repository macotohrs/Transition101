import { sleep } from "../utils/sleep";

let sleeping = true;
export const Sleep1s = () => {
  if (sleeping) {
    throw sleep(1000).then(()=> {
      sleeping = false;
    })
  }
  return <p>Hello</p>
}