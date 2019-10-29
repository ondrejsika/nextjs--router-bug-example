import { useRouter } from 'next/router'
import Link from 'next/link'
import Header from '../../../components/header'

const Post = () => {
  const router = useRouter()
  const { id } = router.query
  // I see this line two times in console on dev server, in static export is just blank
  console.log(`query.id = ${id}`);
  return (
    <>
      <Header />
      <h1>Post: {id}</h1>
      <ul>
        <li>
          <Link href='/post/[id]/[comment]' as={`/post/${id}/first-comment`}>
            <a>First comment</a>
          </Link>
        </li>
        <li>
          <Link href='/post/[id]/[comment]' as={`/post/${id}/second-comment`}>
            <a>Second comment</a>
          </Link>
        </li>
      </ul>
    </>
  )
}

export default Post
