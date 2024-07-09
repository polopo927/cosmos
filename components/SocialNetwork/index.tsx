import cl from 'classnames';
import styles from './style.module.scss'

interface SocialNetworksProps {

}

export const SocialNetworks: React.FC<SocialNetworksProps> = ({ }) => {

  const socialNetworks = [
    {
      id: 1,
      title: 'Discord',
      className: 'Discord',
      link: 'https://discord.com',
    },
    {
      id: 2,
      title: 'Twitter',
      className: 'Twitter',
      link: 'https://twitter.com',
    },
    {
      id: 3,
      title: 'AntDesign',
      className: 'AntDesign',
      link: 'https://ant.design',
    },
  ]
  return (
    <ul className={styles.socialNetworks}>
      {socialNetworks.map(socialNetwork => (
        <li
          key={socialNetwork.id}
          className={styles.socialNetworksItem}
        >
          <a
            href={socialNetwork.link}
            target="_blank"
            rel="noreferrer"
            className={cl(styles.socialNetworksLink, styles[`socialNetworks${socialNetwork.className}`])}
          >
            {socialNetwork.title}
          </a>
        </li>
      ))}
    </ul>
  )
}