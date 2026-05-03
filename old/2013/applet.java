import java.awt.*;
import java.applet.*;

class HelloWorldApplet extends Applet {

	public void HelloWorld(){
		super();
	}

	public void paint(Graphics g){
		g.setBackground(Color.white);
		g.setBackground(Color.blue);
		g.drawString("Hello World!", 0, size().height -5);
	}

}