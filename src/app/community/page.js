import React from 'react'
import styles from './page.module.css'

const CommunityPage = () => {
    const communityMembers = [
        {
            id: 1,
            name: 'Sarah Johnson',
            specialty: 'Italian Cuisine',
            image: '👨‍🍳',
            followers: 1250,
            posts: 48
        },
        {
            id: 2,
            name: 'Marco Chen',
            specialty: 'Asian Fusion',
            image: '👩‍🍳',
            followers: 980,
            posts: 35
        },
        {
            id: 3,
            name: 'Emma Rodriguez',
            specialty: 'Vegan Cooking',
            image: '👨‍🍳',
            followers: 2100,
            posts: 67
        },
        {
            id: 4,
            name: 'James Williams',
            specialty: 'Grilling & BBQ',
            image: '👩‍🍳',
            followers: 1540,
            posts: 52
        },
        {
            id: 5,
            name: 'Priya Patel',
            specialty: 'Indian Spices',
            image: '👨‍🍳',
            followers: 1820,
            posts: 43
        },
        {
            id: 6,
            name: 'Lucas Silva',
            specialty: 'Desserts & Baking',
            image: '👩‍🍳',
            followers: 2340,
            posts: 71
        }
    ];

    const communityPosts = [
        {
            id: 1,
            author: 'Sarah Johnson',
            title: 'Perfect Homemade Pasta Recipe',
            description: 'Learn how to make authentic Italian pasta from scratch with tips and tricks.',
            likes: 450,
            comments: 32
        },
        {
            id: 2,
            author: 'Marco Chen',
            title: 'Fusion Sushi Bowl Innovation',
            description: 'Combining traditional sushi with modern bowl aesthetics.',
            likes: 320,
            comments: 28
        },
        {
            id: 3,
            author: 'Emma Rodriguez',
            title: 'Easy 30-Minute Vegan Dinner',
            description: 'Quick and delicious plant-based recipes for busy weeknights.',
            likes: 580,
            comments: 45
        }
    ];

    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <h1>🍽️ Foodies Community</h1>
                <p>Join thousands of food enthusiasts sharing recipes, tips, and culinary adventures</p>
                <button className={styles.ctaButton}>Join Now</button>
            </section>

            <section className={styles.statsSection}>
                <div className={styles.stat}>
                    <h3>15.2K</h3>
                    <p>Community Members</p>
                </div>
                <div className={styles.stat}>
                    <h3>3.8K</h3>
                    <p>Recipes Shared</p>
                </div>
                <div className={styles.stat}>
                    <h3>52.1K</h3>
                    <p>Total Interactions</p>
                </div>
                <div className={styles.stat}>
                    <h3>180+</h3>
                    <p>Countries</p>
                </div>
            </section>

            <section className={styles.membersSection}>
                <h2>Featured Members</h2>
                <div className={styles.memberGrid}>
                    {communityMembers.map((member) => (
                        <div key={member.id} className={styles.memberCard}>
                            <div className={styles.memberAvatar}>{member.image}</div>
                            <h3>{member.name}</h3>
                            <p className={styles.specialty}>{member.specialty}</p>
                            <div className={styles.stats}>
                                <span>{member.followers} followers</span>
                                <span>{member.posts} posts</span>
                            </div>
                            <button className={styles.followButton}>Follow</button>
                        </div>
                    ))}
                </div>
            </section>

            <section className={styles.postsSection}>
                <h2>Recent Discussions</h2>
                <div className={styles.postsList}>
                    {communityPosts.map((post) => (
                        <article key={post.id} className={styles.postCard}>
                            <h3>{post.title}</h3>
                            <p className={styles.author}>By {post.author}</p>
                            <p className={styles.description}>{post.description}</p>
                            <div className={styles.postFooter}>
                                <span>❤️ {post.likes} likes</span>
                                <span>💬 {post.comments} comments</span>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className={styles.ctaSection}>
                <h2>Ready to Share Your Culinary Journey?</h2>
                <p>Start posting your favorite recipes and connect with food lovers worldwide</p>
                <button className={styles.ctaButton}>Share a Recipe</button>
            </section>
        </div>
    )
}

export default CommunityPage