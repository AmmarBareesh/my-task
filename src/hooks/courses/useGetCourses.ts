import { gql, useQuery } from "@apollo/client";
import { Course } from "../../common/interfaces/course.interface";

const GET_COURSES = gql`
query GetCourses{
        courses{
            id,
            name,
            title,
            image,
            start_date,
            end_date,
            type,
            level
        }

}
`
export const useGetCourses = (): Course[] | undefined => {
    const { data } = useQuery(GET_COURSES);
    return data?.courses;
}