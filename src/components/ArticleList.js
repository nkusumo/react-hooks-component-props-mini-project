import Article from "./Article"

export default function ArticleList({posts}) {
    return (
        <main>
            {posts.map(el => <Article 
                key={el.id}
                title={el.title}
                date={el.date}
                preview={el.preview}
                minutes={el.minutes}
            />)}
        </main>
    )
}