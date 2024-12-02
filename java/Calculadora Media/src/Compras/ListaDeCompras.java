package Compras;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class ListaDeCompras {

    private final List<String> lista;

    public ListaDeCompras() {
        this.lista = new ArrayList<>();
    }

    public void adicionarItem(String item) {
        this.lista.add(item);
    }

    public void exibirItens() {
        System.out.println("Lista de compras:");
        for (String item : this.lista) {
            System.out.println(item);
        }
    }

    public void menu() {
        Scanner scanner = new Scanner(System.in);
        while (true) {
            System.out.println("Menu de Compras");
            System.out.println("1 - Adicionar item");
            System.out.println("2 - Exibir itens");
            System.out.println("3 - Sair");
            System.out.print("Escolha uma opção: ");
            int opcao = scanner.nextInt();
            scanner.nextLine(); // Consumir a nova linha

            switch (opcao) {
                case 1:
                    System.out.print("Digite o item a ser adicionado: ");
                    String item = scanner.nextLine();
                    this.adicionarItem(item);
                    break;
                case 2:
                    this.exibirItens();
                    break;
                case 3:
                    System.out.println("Saindo...");
                    break;
                default:
                    System.out.println("Opção inválida");
            }


        }
        scanner.close();
    }

}