module.exports = {
    answers: [
        `#include <bits/stdc++.h>
        using namespace std;
        
        int main(){
            int number_of_elements;
            cin >> number_of_elements;
            vector <int> array(number_of_elements);
            int sum_of_array = 0;

            for(int i = 0; i < number_of_elements; i++){
                cin >> array[i];
                sum_of_array += array[i];
            }

            cout << sum_of_array;
            return 0;
        }
        `,
        `import java.io.*;
        import java.util.*;
        import java.text.*;
        import java.math.*;
        import java.util.regex.*;
        
        public class Solution {
        
            public static void main(String[] args) {
                Scanner input = new Scanner(System.in);
                int length = input.nextInt();
                int sum = 0;
                
                for(int i = 0; i < length; i++) {
                    sum += input.nextInt();
                }
                
                System.out.println(sum);
            }
        }`,

        `#include <cmath>
        #include <cstdio>
        #include <vector>
        #include <iostream>
        #include <algorithm>
        using namespace std;
        
        int solveMeFirst(int a, int b) {
         // Hint: Type return a+b; below:
          return a+b;
        }
        
        int main() {
          int num1, num2;
          int sum;
          cin>>num1>>num2;
          sum = solveMeFirst(num1,num2);
          cout<<sum;
          return 0;
        }`,
]
}