/*
  У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType. 
  Ваше завдання – використовувати Pick та generics для вказівки, що поля цих об'єктів належать AllType.
  Функція compare повинна повертати AllType.
*/

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};
function compare<T extends keyof AllType>(top: Pick<AllType, T>, bottom: Pick<AllType, T>): Pick<AllType, T> {
  const result = {} as Pick<AllType, T>;
  Object.keys(top).forEach(key => {
    result[key as keyof AllType] = top[key as keyof AllType];
  });
  Object.keys(bottom).forEach(key => {
    result[key as keyof AllType] = bottom[key as keyof AllType];
  });
  return result;
}
export {};
