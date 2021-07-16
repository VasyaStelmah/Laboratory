export const signIn = async (email:string, password:string) => {
  try {
    const response = await fetch('http://localhost:5000/user/signin', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const json = await response.json();
    return JSON.stringify(json)
  } catch (error) {
    console.error('Ошибка:', error);
  }
}
export const signUp = async (email:string, password:string) => {
  try {
    const response = await fetch('http://localhost:5000/user/signin', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const json = await response.json();
    return JSON.stringify(json)
  } catch (error) {
    console.error('Ошибка:', error);
  }
}