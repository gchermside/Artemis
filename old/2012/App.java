import java.awt.*;
import java.applet.*;

class HelloWorldApplet extends java.applet.Applet{

        public void HelloWorld()
        {
                super();
        }

        public void paint (Graphics g)
        {
                g.setBackground ( Color.white );
                g.setColor   ( Color.blue );
                g.drawString ( "Hello world!", 0, size().height - 5);
        }
}
