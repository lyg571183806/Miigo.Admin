
namespace Miigo.Admin.Core;

/// <summary>
/// 控制台logo
/// </summary>
public static class ConsoleLogoSetup
{
    public static void AddConsoleLogo(this IServiceCollection services)
    {
        Console.ForegroundColor = ConsoleColor.Blue;
        Console.WriteLine(@"
  __  __  _  _                               _             _        
 |  \/  |(_)(_)                    /\       | |           (_)       
 | \  / | _  _   __ _   ___       /  \    __| | _ __ ___   _  _ __  
 | |\/| || || | / _` | / _ \     / /\ \  / _` || '_ ` _ \ | || '_ \ 
 | |  | || || || (_| || (_) |_  / ____ \| (_| || | | | | || || | | |
 |_|  |_||_||_| \__, | \___/(_)/_/    \_\\__,_||_| |_| |_||_||_| |_|
                 __/ |                                              
                |___/     ");
        Console.ForegroundColor = ConsoleColor.Red;
        //Console.WriteLine(@"源码地址: https://gitee.com/zuohuaijun/Admin.NET");
        Console.ForegroundColor = ConsoleColor.Yellow;
        Console.WriteLine(@"欢迎使用Miigo.Admin！");
    }
}