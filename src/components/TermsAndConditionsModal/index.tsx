import './index.scss'

const TermsAndConditionsModal = () => (
  <div className="modal fade" id="terms-and-conditions-modal" tabIndex={-1} aria-labelledby="terms-and-conditions" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <header className="modal-header">
          <h1 className="modal-title fs-5" id="terms-and-conditions">Términos y Condiciones de ABICHI</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </header>

        <main className="modal-body overflow-auto">
          <p>
            Por favor, lea detenidamente los siguientes términos y condiciones antes de utilizar nuestros servicios de venta y compra de productos. Al acceder o utilizar nuestro sitio web y servicios, usted acepta cumplir con estos términos. Si no está de acuerdo con alguna parte de los términos y condiciones, le recomendamos que no utilice nuestros servicios.
          </p>
          <ol>
            <li>
              Registro de cuenta:
              <ol>
                <li>
                  Al registrarse en ABICHI, usted garantiza que la información proporcionada es precisa, completa y actualizada. Es su responsabilidad mantener la confidencialidad de su cuenta y contraseña. Cualquier actividad realizada bajo su cuenta es su responsabilidad.
                </li>
              </ol>
              
            </li>

            <li>
              Uso de nuestros servicios:
              <ol>
                <li>
                  Usted acepta utilizar nuestros servicios solo para fines legales y de acuerdo con estos términos y condiciones.

                </li>
                <li>
                  ABICHI se reserva el derecho de rechazar o cancelar pedidos, así como de limitar las cantidades de productos que ofrecemos. Todas las descripciones de productos y precios están sujetas a cambios en cualquier momento sin previo aviso.
                </li>
              </ol>
            </li>

            <li>
              Compras y Pagos:
              <ol>
                <li>
                  Al realizar una compra a través de nuestro sitio web, usted garantiza que está autorizado para utilizar el método de pago proporcionado y que la información proporcionada es precisa y completa.
                </li>
                <li>
                  Nos reservamos el derecho de cambiar los precios de nuestros productos en cualquier momento sin previo aviso.
                </li>
              </ol>

            </li>

            <li>
              4. Envíos y Entregas:
              <ol>
                <li>
                  El tiempo de entrega estimado se proporciona como una guía y no garantiza la entrega en un plazo específico.
                </li>
                <li>

                  ABICHI no se hace responsable de cualquier pérdida, daño o robo de productos después de la entrega.
                </li>
              </ol>

            </li>

            <li>
              Devoluciones y Reembolsos:

              <ol>
                <li>

                  Consulte nuestra política de devoluciones y reembolsos en nuestro sitio web para obtener información detallada sobre los procedimientos y requisitos.
                </li>
              </ol>
            </li>

            <li>
              Propiedad Intelectual:
              <ol>
                <li>

                  Todo el contenido incluido en nuestro sitio web, como texto, gráficos, logotipos, imágenes y software, es propiedad de ABICHI y está protegido por las leyes de propiedad intelectual.
                </li>
              </ol>
            </li>

            <li>
              Cambios en los Términos:
              <ol>
                <li>
                  ABICHI se reserva el derecho de modificar estos términos y condiciones en cualquier momento. Las modificaciones entrarán en vigencia inmediatamente después de su publicación en nuestro sitio web.
                </li>
              </ol>
            </li>
          </ol>

          <p>
            Al utilizar nuestros servicios, usted acepta estar sujeto a los términos y condiciones mencionados anteriormente. Le recomendamos que revise regularmente esta página para estar al tanto de cualquier cambio. Si tiene alguna pregunta, comuníquese con nuestro servicio de atención al cliente.
          </p>
          <p>
            Gracias por elegir ABICHI. ¡Esperamos brindarle una experiencia de compra excepcional!
          </p>
        </main>

        <footer className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        </footer>
      </div>
    </div>
  </div>
)

export default TermsAndConditionsModal
