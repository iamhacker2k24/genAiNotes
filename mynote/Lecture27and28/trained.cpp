#include <iostream>
#include <cmath>
using namespace std;

double predict(double study, double sleep)
{
    // weights copied from training screen
    double w1 = 4.92057;
    double w2 = 2.9442;
    double b = 4.85643;
    // =4.92057  w2=2.9442  b=4.85644

    return w1 * study + w2 * sleep + b;
}

int main()
{
    double study, sleep;

    cout << "Enter study hours: ";
    cin >> study;
    cout << "Enter sleep hours: ";
    cin >> sleep;

    cout << "Predicted marks: " << predict(study, sleep) << endl;
    cout << "Predicted marks in round : " << round(predict(study, sleep)) << endl;

    return 0;
}