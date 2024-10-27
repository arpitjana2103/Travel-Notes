import styles from "./Product.module.css";
import PageNav from "../components/PageNav";

function Product() {
    return (
        <main className={styles.product}>
            <PageNav />
            <section>
                <div>
                    <h2>About Travel-Notes</h2>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Vitae vel labore mollitia iusto. Recusandae quos
                        provident, laboriosam fugit voluptatem iste.
                    </p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Vitae vel labore mollitia iusto. Recusandae quos
                        provident, laboriosam fugit voluptatem iste.
                    </p>
                </div>
                <img
                    src="/img-1.jpg"
                    alt="overview of a large city with skyscrapers"
                />
            </section>
        </main>
    );
}

export default Product;
