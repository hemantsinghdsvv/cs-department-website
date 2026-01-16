import { FacultyService } from "@/services/facultyService";
import { FacultyCard } from "@/components/FacultyCard";

export const dynamic = "force-dynamic";

export default async function FacultyListing() {
  const facultyData = await FacultyService.getAll();

  return (
    <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold tracking-tight pb-2 sm:text-4xl text-primary">Faculty Profiles</h1>
        <p className="text-muted-foreground text-lg">
          Meet our distinguished faculty members contributing to research and teaching.
        </p>
      </div>
      {facultyData.length === 0 ? (
        <div className="text-center py-12 text-muted-foreground">
           No faculty profiles found.
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {facultyData.map((faculty) => (
            <FacultyCard key={faculty.id} faculty={faculty} />
          ))}
        </div>
      )}
    </div>
  );
}

