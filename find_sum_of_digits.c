
#include <stdio.h>

int main()
{
    int enteredNumber, lastDigitHolder, numWithoutLastDigitHolder,sum = 0;
    printf("Enter the number whose digit should be added:\n");
    scanf("%d",&enteredNumber);
    while(enteredNumber!=0) {
        lastDigitHolder = enteredNumber%10;
        sum = sum + lastDigitHolder;
        numWithoutLastDigitHolder = enteredNumber/10;
        enteredNumber = numWithoutLastDigitHolder;
    }
   printf("Sum : :%d",sum);

    return 0;
}
