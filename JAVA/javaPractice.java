class HelloWorld {
    public static void main(String arg[]) {
        System.out.println("Hello World!");
        
        int sum = add(3, 5);
        System.out.println(sum);
        pattern();
    }

    public static int add(int a, int b) {
        return a + b;
    }

    public static void pattern() {
        for (int i = 0; i < 5; i++) {
            System.out.println("*");
        }
    }
}
