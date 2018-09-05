public class BasicCal{
    public static void main(String[] args) {
        System.out.println(sum(2,3));
        System.out.println(mul(2,3));
        System.out.println(sub(2,3));
        int sum(int a, int b){
            return a+b;
        }
        int mul(int a, int b){
            return a*b;
        }
        int sub(int a, int b){
            return a-b;
        }
    }
    
}