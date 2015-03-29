package controlador;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class ClaseControlador
 */
@WebServlet("/ClaseControlador")
public class ClaseControlador extends HttpServlet {
	private static final long serialVersionUID = 1L;
	CuadradoMagico cm = new CuadradoMagico(3);
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ClaseControlador() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter out = response.getWriter();

		 String p00 = request.getParameter("p00");
		 String p01 = request.getParameter("p01");
		 String p02 = request.getParameter("p02");
		 String p10 = request.getParameter("p10");
		 String p11 = request.getParameter("p11");
		 String p12 = request.getParameter("p12");
		 String p20 = request.getParameter("p20");
		 String p21 = request.getParameter("p21");
		 String p22 = request.getParameter("p22");
		 
		 cm.guardarDato(p00,0,0);
		 cm.guardarDato(p01,0,1);
		 cm.guardarDato(p02,0,2);
		 cm.guardarDato(p10,1,0);
		 cm.guardarDato(p11,1,1);
		 cm.guardarDato(p12,1,2);
		 cm.guardarDato(p20,2,0);
		 cm.guardarDato(p21,2,1);
		 cm.guardarDato(p22,2,2);
		 
		 out.println("<html>");
		 out.println("<head>");
		 out.println("</head>");
		 out.println("<style type='text/css'> "
		 		+ "body{background-color: #FAFAFA;} "
		 		+ "body{font-family: Helvetica;} "
		 		+ "body{text-align: center;} "
		 		+ "</style>");
		 out.println("<body>");
		 out.println("Matriz Ingresada: ");
		 out.println("<br>");
		 out.println("| " + p00 + " |");
		 out.println(" | " + p01 + " |");
		 out.println(" | " + p02 + " |");
		 out.println("<br>");
		 out.println("| " + p10 + " |");
		 out.println(" | " + p11 + " |");
		 out.println(" | " + p12 + " |");
		 out.println("<br>");
		 out.println("| " + p20 + " |");
		 out.println(" | " + p21 + " |");
		 out.println(" | " + p22 + " |");
		 out.println("<br>");
		 out.println("<strong>" + cm.comprobarCM() + "</strong>");
		 out.println("<br>");
		 out.println("</body>");
		 out.println("</html>");
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}
	
	public void salvarDatos(){
		
	}

}
