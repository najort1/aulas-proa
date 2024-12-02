package Calculadora;

import java.util.ArrayList;
import java.util.List;

public class Calculos {

    public void tabuada(int numero) {
        System.out.println("Tabuada de multiplicação:");
        int i = 1;
        while (i <= 10) {
            System.out.println(numero + " * " + i + " = " + (numero * i));
            i++;
        }

        System.out.println("\nTabuada de adição:");
        i = 1;
        while (i <= 10) {
            System.out.println(numero + " + " + i + " = " + (numero + i));
            i++;
        }

        System.out.println("\nTabuada de subtração:");
        i = 1;
        while (i <= 10) {
            System.out.println(numero + " - " + i + " = " + (numero - i));
            i++;
        }

        System.out.println("\nTabuada de divisão:");
        i = 1;
        while (i <= 10) {
            System.out.println(numero + " / " + i + " = " + (numero / (double) i));
            i++;
        }
    }

    public void contagemRegressiva(int numero) {
        System.out.println("\nContagem regressiva:");
        while (numero >= 0) {
            System.out.println(numero);
            numero--;
        }
    }

    public List<Integer> contarPares(int numero) {
        List<Integer> pares = new ArrayList<>();
        System.out.println("\nContagem de números pares:");
        while (numero >= 0) {
            if (numero % 2 == 0) {
                pares.add(numero);
            }
            numero--;
        }

        return pares;

    }

    public int somaAte(int valor) {
        int soma = 0;
        int i = 1;
        while (i <= valor) {
            soma += i;
            i++;
        }
        return soma;
    }

}