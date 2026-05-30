export const convertToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader() // создаем reader для файла
    reader.readAsDataURL(file) // читаем файл как base64
    reader.onload = () => resolve(reader.result) // когда загрузилось — отдаем результат
    reader.onerror = (error) => reject(error) // если ошибка
  })
}
