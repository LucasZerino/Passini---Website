import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function Page(){
  return (
    <main className="flex-1 p-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Overview</CardTitle>
                <CardDescription>A summary of your blog's performance.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                    <div className="text-2xl font-bold">120</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Total Posts</div>
                  </div>
                  <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                    <div className="text-2xl font-bold">2.3K</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Total Views</div>
                  </div>
                  <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                    <div className="text-2xl font-bold">150</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Total Comments</div>
                  </div>
                  <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                    <div className="text-2xl font-bold">12</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">New Subscribers</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Posts</CardTitle>
                  <CardDescription>A list of your most recent blog posts.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead>Author</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          <Link href="#" className="font-medium hover:underline" prefetch={false}>
                            Introduction to React
                          </Link>
                        </TableCell>
                        <TableCell>John Doe</TableCell>
                        <TableCell>May 1, 2023</TableCell>
                        <TableCell>
                          <Badge variant="success">Published</Badge>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Link href="#" className="font-medium hover:underline" prefetch={false}>
                            The Future of Web Development
                          </Link>
                        </TableCell>
                        <TableCell>Jane Smith</TableCell>
                        <TableCell>April 15, 2023</TableCell>
                        <TableCell>
                          <Badge variant="success">Published</Badge>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Link href="#" className="font-medium hover:underline" prefetch={false}>
                            Mastering CSS Grid
                          </Link>
                        </TableCell>
                        <TableCell>Bob Johnson</TableCell>
                        <TableCell>March 30, 2023</TableCell>
                        <TableCell>
                          <Badge variant="warning">Draft</Badge>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Recent Comments</CardTitle>
                  <CardDescription>A list of the most recent comments on your blog.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="flex items-start gap-4">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>AC</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div className="font-medium">Jane Doe</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">2 days ago</div>
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          Great post! I really enjoyed reading it.
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>AC</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div className="font-medium">John Smith</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">1 week ago</div>
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          Interesting perspective. I'll have to try that out.
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>AC</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div className="font-medium">Bob Johnson</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">2 weeks ago</div>
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          Awesome post! Can't wait to see more.
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
  );
}
