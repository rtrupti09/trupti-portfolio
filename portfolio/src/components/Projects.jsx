const Projects=()=>(
    <section className="container p-10 bg-gray-100 text-center" id='projects'>
        <div className="box">
            <h2 className="text-3xl fon-bold mb-4">
                Projects
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
                {/*Project-1 */}
                <div className="p-4 bg-white shadow rounded">
                    <h3 className="font-semibold">Project-1</h3>
                    <p>Ecommerce Flipkart does online shopping & delivery of Products</p>
                </div>
                {/*project-2 */}
                <div className="p-4 bg-white shadow rounded">
                    <h3 className="font-semibold">Project-1</h3>
                    <p>E-Libaray does online issueing and reading books</p>
                </div>
                {/*Project-3 */}
                <div className="p-4 bg-white shadow rounded">
                    <h3 className="font-semibold">Project-1</h3>
                    <p>petstore does online adpat and donate pets</p>
                </div>
            </div>
        </div>
    </section>
)

export default Projects;