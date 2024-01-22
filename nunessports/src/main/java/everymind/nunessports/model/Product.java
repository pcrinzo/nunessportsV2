package everymind.nunessports.model;

import jakarta.persistence.*;

@Entity
@Table(name = "tb_produto")
public class Product {
    private long id;
    private String nome;
    private String codigo;
    private String descricao;
    private Double preco;

    public Product() {

    }

    public Product(String nome, String codigo, String descricao, Double preco) {
        this.nome = nome;
        this.codigo = codigo;
        this.descricao = descricao;
        this.preco = preco;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }

    @Column(name = "nome", nullable = false)
    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }

    @Column(name = "codigo", nullable = false)
    public String getCodigo() {
        return codigo;
    }
    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    @Column(name = "descricao", nullable = false)
    public String getDescricao() {
        return descricao;
    }
    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    @Column(name = "preco", nullable = false)
    public Double getPreco() {
        return preco;
    }
    public void setPreco(Double preco) {
        this.preco = preco;
    }

    @Override
    public String toString() {
        return "Produto [id=" + id + ", nome=" + nome + ", codigo=" + codigo + ", descricao=" + descricao
                + "]";
    }

}
