## 🏆 Cálculo de Nível de Jogador  

Este projeto foi desenvolvido como parte do curso de **Lógica de Programação** e tem como objetivo calcular o **nível de um jogador** com base no número de vitórias e derrotas em partidas ranqueadas.

---

### 🚀 **Como funciona?**  
A lógica do programa é simples:  

1. O usuário informa **quantas vitórias** e **quantas derrotas** ele tem.  
2. O saldo de ranqueadas é calculado como:
   ```javascript
   saldo = vitorias - derrotas;
   ```
3. Com base na quantidade de **vitórias**, o jogador recebe um **nível** de acordo com a seguinte tabela:  

   - **Menos de 10 vitórias** → 🏅 **Ferro**  
   - **Entre 11 e 20 vitórias** → 🏅 **Bronze**  
   - **Entre 21 e 50 vitórias** → 🏅 **Prata**  
   - **Entre 51 e 80 vitórias** → 🏅 **Ouro**  
   - **Entre 81 e 90 vitórias** → 💎 **Diamante**  
   - **Entre 91 e 100 vitórias** → 🔥 **Lendário**  
   - **Mais de 100 vitórias** → 🏆 **Imortal**  

4. O programa exibe no console a seguinte mensagem:
   ```
   O Herói tem saldo de X e está no nível Y
   ```