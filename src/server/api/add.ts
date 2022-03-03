import { useBody, useCookies, useQuery } from 'h3'

export default async (req, res) => {
    let query = useQuery(req)

    let formData = new URLSearchParams();
    formData.append("vk_group_id", "170533771");
    formData.append("access_token", process.env.SECRET);
    formData.append("v", "2");
    formData.append("subscription_id", "1584736");
    formData.append("vk_user_id", `${query.userVkId}`);

    const response = await fetch("https://senler.ru/api/subscribers/add", {
        method: "POST",
        headers: {
            "User-Agent": "SenlerJsClient/2",
        },
        body: formData,
    });
    let result = await response.json();

    return result
}