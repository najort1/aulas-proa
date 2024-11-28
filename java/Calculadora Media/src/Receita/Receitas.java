package Receita;

import java.util.List;
import java.util.ArrayList;

public class Receitas {

    String nome;
    Double preco;
    List<String> ingredientes;

    public Receitas(String nome, Double preco, List<String> ingredientes) {
        this.nome = nome;
        this.preco = preco;
        this.ingredientes = new ArrayList<>(ingredientes);
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Double getPreco() {
        return preco;
    }

    public void setPreco(Double preco) {
        this.preco = preco;
    }

    public List<String> getIngredientes() {
        return ingredientes;
    }

    public void setIngredientes(List<String> ingredientes) {
        this.ingredientes = ingredientes;
    }

    public Double alterar_valor(Double novo_valor){
        return this.preco = novo_valor;
    }

    public void exibir_detalhes(){
        System.out.println("====================================");
        System.out.println();
        System.out.println("Nome da receita: "+this.nome);
        System.out.println("Preço da receita: "+this.preco);
        System.out.println("====================================");
        System.out.println("Ingredientes");
        System.out.println("====================================");

        for (String ingrediente : this.ingredientes) {
            System.out.println("**Ingrediente**: "+ingrediente);
        }
        System.out.println();
        System.out.println("====================================");
    }

    public void adicionar_ingrediente(String ingrediente){
        this.ingredientes.add(ingrediente);
    }

    public void remover_ingrediente(String ingrediente){
        this.ingredientes.remove(ingrediente);
    }


}