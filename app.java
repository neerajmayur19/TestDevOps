import java.util.*;
public class app
{
    public static void main(String[] args)
    {
        try (Scanner sc = new Scanner(System.in)) {
            int number = sc.nextInt();
            System.out.println(number);
        }
        catch(Exception e)
        {
            System.out.println(e);
        }
    }
}