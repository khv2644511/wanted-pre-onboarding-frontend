# wanted-pre-onboarding-frontend

# 프로젝트 데모
- 배포 링크 : [REACT TODO APP](https://main--celadon-druid-6b974e.netlify.app/signin)
- 테스트 계정 : hyeppy980804@naver.com
- 비밀번호 : hyeppy980804

# 프로젝트 시연

|회원가입|로그인|로그아웃|
|---|---|---|
|![signup](https://user-images.githubusercontent.com/38063033/230762073-7fe29077-fa61-4f29-92b5-8cd52ba69bed.gif)|![signin](https://user-images.githubusercontent.com/38063033/230762345-8e103a69-1197-45df-bf5b-141fa3bf49f1.gif)|![logout](https://user-images.githubusercontent.com/38063033/230762702-f71d5a5a-b775-4179-b336-a6cc7f94a9a6.gif)|

|투두 추가|투두 수정|투두 삭제|투두 완료| 
|---|---|---|---|
|![addtodo](https://user-images.githubusercontent.com/38063033/230762461-f4a134c3-0f2b-48ea-af25-2bba284edf47.gif)|![todoedit](https://user-images.githubusercontent.com/38063033/230762864-9f63327f-7566-4db6-9c69-b3826e1e271a.gif)|![tododelete](https://user-images.githubusercontent.com/38063033/230762967-808ea7b0-d0ae-4d8d-af20-ef124e70345e.gif)|![completetodo](https://user-images.githubusercontent.com/38063033/230762467-4af96a18-bdb4-4e27-bfc1-0119d3c6fe88.gif)|


# 기술스택
- react
- styled-component
- axios
- react-icons

# 폴더구조
```
📦src
 ┣ 📂components
 ┃ ┣ 📂HOC
 ┃ ┃ ┗ 📂auth
 ┃ ┃ ┃ ┗ 📜ProtectedRoute.jsx
 ┃ ┣ 📂common
 ┃ ┃ ┣ 📂Button
 ┃ ┃ ┃ ┣ 📜Button.jsx
 ┃ ┃ ┃ ┗ 📜ButtonStyle.jsx
 ┃ ┃ ┣ 📂ErrorMessage
 ┃ ┃ ┃ ┣ 📜ErrorMeassageStyle.jsx
 ┃ ┃ ┃ ┗ 📜ErrorMessage.jsx
 ┃ ┃ ┗ 📂Input
 ┃ ┃ ┃ ┣ 📜Input.jsx
 ┃ ┃ ┃ ┗ 📜InputStyle.jsx
 ┃ ┣ 📂style
 ┃ ┃ ┗ 📜GlobalStyled.jsx
 ┃ ┗ 📂todo
 ┃ ┃ ┣ 📂CancelButton
 ┃ ┃ ┃ ┣ 📜CancelButton.jsx
 ┃ ┃ ┃ ┗ 📜CancelButtonStyle.jsx
 ┃ ┃ ┣ 📂LogoutButton
 ┃ ┃ ┃ ┣ 📜LogoutButton.jsx
 ┃ ┃ ┃ ┗ 📜LogoutButtonStyle.jsx
 ┃ ┃ ┣ 📂ModifyButton
 ┃ ┃ ┃ ┣ 📜ModifyButton.jsx
 ┃ ┃ ┃ ┗ 📜ModifyButtonStyle.jsx
 ┃ ┃ ┣ 📂RemoveButton
 ┃ ┃ ┃ ┣ 📜RemoveButton.jsx
 ┃ ┃ ┃ ┗ 📜RemoveButtonStyle.jsx
 ┃ ┃ ┣ 📂SubmitButton
 ┃ ┃ ┃ ┣ 📜SubmitButton.jsx
 ┃ ┃ ┃ ┗ 📜SubmitButtonStyel.jsx
 ┃ ┃ ┣ 📂TodoInput
 ┃ ┃ ┃ ┣ 📜TodoInput.jsx
 ┃ ┃ ┃ ┗ 📜TodoInputStyle.jsx
 ┃ ┃ ┣ 📂TodoItem
 ┃ ┃ ┃ ┣ 📜TodoItem.jsx
 ┃ ┃ ┃ ┗ 📜TodoItemStyle.jsx
 ┃ ┃ ┗ 📂TodoList
 ┃ ┃ ┃ ┣ 📜TodoList.jsx
 ┃ ┃ ┃ ┗ 📜TodoListStyle.jsx
 ┣ 📂constant
 ┃ ┗ 📜config.js
 ┣ 📂hooks
 ┃ ┣ 📂common
 ┃ ┃ ┗ 📜useInput.js
 ┃ ┗ 📂todo
 ┃ ┃ ┗ 📜useGetTodo.js
 ┣ 📂pages
 ┃ ┣ 📂NotFound
 ┃ ┃ ┣ 📜NotFound.jsx
 ┃ ┃ ┗ 📜NotFoundStyle.jsx
 ┃ ┣ 📂SignIn
 ┃ ┃ ┣ 📜SignIn.jsx
 ┃ ┃ ┗ 📜SignInStyle.jsx
 ┃ ┣ 📂SignUp
 ┃ ┃ ┣ 📜SignUp.jsx
 ┃ ┃ ┗ 📜SignupStyle.jsx
 ┃ ┗ 📂Todo
 ┃ ┃ ┣ 📜Todo.jsx
 ┃ ┃ ┗ 📜TodoStyle.jsx
 ┣ 📂router
 ┃ ┗ 📜Router.jsx
 ┣ 📂services
 ┃ ┗ 📂api
 ┃ ┃ ┣ 📜auth.js
 ┃ ┃ ┣ 📜client.js
 ┃ ┃ ┗ 📜todo.js
 ┣ 📂util
 ┣ 📜App.js
 ┗ 📜index.js
```
